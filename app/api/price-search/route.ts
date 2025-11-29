import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const API_TOKEN = process.env.PRICES_API_KEY;
  
  // Debug log (remove after testing)
  console.log('API Token exists:', !!API_TOKEN);
  console.log('API Token length:', API_TOKEN?.length);
  
  if (!API_TOKEN) {
    return NextResponse.json(
      { success: false, error: 'API key not configured. Check your .env.local file and restart the server.' },
      { status: 500 }
    );
  }

  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json(
        { success: false, error: 'Search query is required' },
        { status: 400 }
      );
    }

    // Step 1: Create bulk job
    const formData = new URLSearchParams();
    formData.append('token', API_TOKEN);
    formData.append('source', 'google-shopping');
    formData.append('country', 'in');
    formData.append('key', 'keyword');
    formData.append('values', query);
    formData.append('completeness', 'all_pages');

    const createResponse = await fetch('https://api.priceapi.com/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    const createData = await createResponse.json();
    
    if (!createData.job_id) {
      return NextResponse.json(
        { success: false, error: createData.reason || 'Failed to create job' },
        { status: 400 }
      );
    }

    const jobId = createData.job_id;

    // Step 2: Poll for completion
    let jobStatus = 'new';
    let attempts = 0;
    const maxAttempts = 60;

    while (jobStatus !== 'finished' && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const statusResponse = await fetch(
        `https://api.priceapi.com/jobs/${jobId}?token=${API_TOKEN}`
      );
      
      const statusData = await statusResponse.json();
      jobStatus = statusData.status;
      attempts++;
    }

    if (jobStatus !== 'finished') {
      return NextResponse.json(
        { success: false, error: 'Search timed out' },
        { status: 408 }
      );
    }

    // Step 3: Get results
    const resultsResponse = await fetch(
      `https://api.priceapi.com/products/bulk/${jobId}?token=${API_TOKEN}`
    );

    const resultsData = await resultsResponse.json();
    
    if (!resultsData.products || resultsData.products.length === 0) {
      return NextResponse.json(
        { success: false, error: 'No results found' },
        { status: 404 }
      );
    }

    const product = resultsData.products[0];
    
    if (!product.success) {
      return NextResponse.json(
        { success: false, error: product.reason || 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product: product
    });

  } catch (error: any) {
    console.error('Price search error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
} 