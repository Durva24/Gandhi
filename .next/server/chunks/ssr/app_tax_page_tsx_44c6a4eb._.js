module.exports=[11860,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(210),e=a.i(8406),f=a.i(70106);let g=(0,f.default)("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]);var h=a.i(73237);let i=(0,f.default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);function j(){let[a,f]=(0,c.useState)(!0),[j,k]=(0,c.useState)(!1),[l,m]=(0,c.useState)(0),[n,o]=(0,c.useState)(""),[p,q]=(0,c.useState)([]),[r,s]=(0,c.useState)([]),[t,u]=(0,c.useState)(new Set),[v,w]=(0,c.useState)(new Set);(0,c.useEffect)(()=>{x()},[]);let x=async()=>{setTimeout(()=>{let a=[{id:"salary",label:"Monthly Salary",amount:55e3,months:4,total:22e4},{id:"freelance_aug",label:"Freelance - August",amount:20550,months:1,total:20550},{id:"freelance_sep",label:"Freelance - September",amount:15e3,months:1,total:15e3},{id:"freelance_oct",label:"Freelance - October",amount:9500,months:1,total:9500},{id:"freelance_nov",label:"Freelance - November",amount:11e3,months:1,total:11e3},{id:"hackathon",label:"Hackathon Prize",amount:25e4,months:1,total:25e4}],b=[{id:"rent",label:"Rent",amount:18e3,months:4,total:72e3,deductible:!0},{id:"electricity",label:"Electricity",amount:1925,months:4,total:7700,deductible:!1},{id:"internet",label:"Internet (Business Use)",amount:999,months:4,total:3996,deductible:!0},{id:"mobile",label:"Mobile",amount:599,months:4,total:2396,deductible:!1},{id:"equipment",label:"Work Equipment",amount:3e3,months:1,total:3e3,deductible:!0},{id:"insurance",label:"Health Insurance",amount:4500,months:1,total:4500,deductible:!0},{id:"loan_interest",label:"Loan Interest Paid",amount:18500,months:1,total:18500,deductible:!0}];q(a),s(b),u(new Set(a.map(a=>a.id))),w(new Set(b.filter(a=>a.deductible).map(a=>a.id))),f(!1)},1200)},y=async()=>{k(!0),m(0),o("Analyzing income sources..."),await new Promise(a=>setTimeout(a,800)),m(25),o("Categorizing expenses..."),await new Promise(a=>setTimeout(a,800)),m(50),o("Computing deductions..."),await new Promise(a=>setTimeout(a,800)),m(75),o("Generating tax report..."),await new Promise(a=>setTimeout(a,1e3)),m(100),setTimeout(()=>{z(),k(!1),m(0)},500)},z=()=>{let a=p.filter(a=>t.has(a.id)).reduce((a,b)=>a+b.total,0),b=r.filter(a=>v.has(a.id)).reduce((a,b)=>a+b.total,0),c=a-b,d=0;c>3e5&&(d+=(c-3e5)*.05),c>6e5&&(d+=(c-6e5)*.05);let e=`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Tax Report FY 2025-26</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; padding: 40px; background: #fff; }
    .header { border-bottom: 4px solid #050505; padding-bottom: 20px; margin-bottom: 30px; }
    .header h1 { font-size: 32px; font-weight: 800; letter-spacing: 2px; color: #050505; margin-bottom: 8px; }
    .header .subtitle { font-size: 14px; font-weight: 600; color: #666; }
    .ai-badge { display: inline-block; background: #C4F000; color: #050505; padding: 6px 12px; font-size: 11px; font-weight: 800; letter-spacing: 1px; border: 2px solid #050505; margin-top: 12px; }
    .section { margin-bottom: 30px; }
    .section-title { font-size: 16px; font-weight: 800; color: #050505; letter-spacing: 1px; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid #f5f5f5; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
    .card { background: #fafafa; border: 2px solid #050505; padding: 20px; }
    .card-label { font-size: 11px; font-weight: 700; color: #050505; opacity: 0.6; margin-bottom: 8px; letter-spacing: 0.5px; }
    .card-value { font-size: 24px; font-weight: 800; color: #050505; }
    .highlight { background: #C4F000; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
    th { background: #050505; color: #fff; padding: 12px; text-align: left; font-size: 11px; font-weight: 800; letter-spacing: 0.5px; }
    td { padding: 12px; border-bottom: 1px solid #e5e5e5; font-size: 13px; font-weight: 600; color: #050505; }
    .amount { text-align: right; font-weight: 800; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #f5f5f5; font-size: 11px; color: #666; font-weight: 600; }
    .disclaimer { background: #fef2f2; border: 2px solid #DC2626; padding: 16px; margin-top: 30px; font-size: 11px; font-weight: 700; color: #DC2626; }
  </style>
</head>
<body>
  <div class="header">
    <h1>TAX REPORT FY 2025-26</h1>
    <div class="subtitle">Generated for: Om | Assessment Period: Aug - Nov 2025</div>
    <div class="ai-badge">✨ AI-POWERED ANALYSIS</div>
  </div>

  <div class="section">
    <div class="section-title">EXECUTIVE SUMMARY</div>
    <div class="grid">
      <div class="card">
        <div class="card-label">GROSS TOTAL INCOME</div>
        <div class="card-value">₹${a.toLocaleString("en-IN")}</div>
      </div>
      <div class="card">
        <div class="card-label">TOTAL DEDUCTIONS</div>
        <div class="card-value">₹${b.toLocaleString("en-IN")}</div>
      </div>
      <div class="card highlight">
        <div class="card-label">TAXABLE INCOME</div>
        <div class="card-value">₹${c.toLocaleString("en-IN")}</div>
      </div>
      <div class="card highlight">
        <div class="card-label">ESTIMATED TAX LIABILITY</div>
        <div class="card-value">₹${Math.round(d).toLocaleString("en-IN")}</div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">INCOME BREAKDOWN</div>
    <table>
      <thead>
        <tr>
          <th>SOURCE</th>
          <th>PERIOD</th>
          <th class="amount">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        ${p.filter(a=>t.has(a.id)).map(a=>`
        <tr>
          <td>${a.label}</td>
          <td>${a.months} month${a.months>1?"s":""}</td>
          <td class="amount">₹${a.total.toLocaleString("en-IN")}</td>
        </tr>
        `).join("")}
        <tr style="background: #f5f5f5; font-weight: 800;">
          <td colspan="2">TOTAL INCOME</td>
          <td class="amount">₹${a.toLocaleString("en-IN")}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <div class="section-title">DEDUCTIONS CLAIMED</div>
    <table>
      <thead>
        <tr>
          <th>CATEGORY</th>
          <th>PERIOD</th>
          <th class="amount">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        ${r.filter(a=>v.has(a.id)).map(a=>`
        <tr>
          <td>${a.label}</td>
          <td>${a.months} month${a.months>1?"s":""}</td>
          <td class="amount">₹${a.total.toLocaleString("en-IN")}</td>
        </tr>
        `).join("")}
        <tr style="background: #f5f5f5; font-weight: 800;">
          <td colspan="2">TOTAL DEDUCTIONS</td>
          <td class="amount">₹${b.toLocaleString("en-IN")}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <div class="section-title">TAX COMPUTATION</div>
    <table>
      <thead>
        <tr>
          <th>DESCRIPTION</th>
          <th class="amount">AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gross Total Income</td>
          <td class="amount">₹${a.toLocaleString("en-IN")}</td>
        </tr>
        <tr>
          <td>Less: Deductions</td>
          <td class="amount">₹${b.toLocaleString("en-IN")}</td>
        </tr>
        <tr style="background: #C4F000;">
          <td style="font-weight: 800;">Taxable Income</td>
          <td class="amount" style="font-weight: 800;">₹${c.toLocaleString("en-IN")}</td>
        </tr>
        <tr>
          <td>Tax Rate Applied</td>
          <td class="amount">${c>6e5?"10%":c>3e5?"5%":"0%"}</td>
        </tr>
        <tr style="background: #C4F000;">
          <td style="font-weight: 800;">Estimated Tax Liability</td>
          <td class="amount" style="font-weight: 800;">₹${Math.round(d).toLocaleString("en-IN")}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="disclaimer">
    ⚠️ DISCLAIMER: This is an AI-generated estimate for informational purposes only. Actual tax liability may vary based on additional factors, exemptions, and current tax laws. Please consult a qualified tax professional for accurate filing.
  </div>

  <div class="footer">
    Generated on ${new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})} | Powered by Gandhi AI Tax Assistant<br>
    This report uses artificial intelligence to analyze your financial data and estimate tax obligations.
  </div>
</body>
</html>`,f=document.createElement("script");f.src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",f.onload=()=>{let a=document.createElement("div");a.innerHTML=e;let b={margin:10,filename:`Tax_Report_FY2025-26_${new Date().getTime()}.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{orientation:"portrait",unit:"mm",format:"a4"}};window.html2pdf().set(b).from(a).save()},document.head.appendChild(f)},A=a=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(a);if(a)return(0,b.jsxs)("div",{style:{height:"100vh",background:"#ffffff",fontFamily:"'Inter', sans-serif",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,b.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[(0,b.jsx)("div",{style:{width:"60px",height:"60px",background:"#C4F000",border:"2px solid #050505",animation:"pulse 1.5s ease-in-out infinite"}}),(0,b.jsx)("div",{style:{fontSize:"14px",fontWeight:700,color:"#050505",letterSpacing:"1px"},children:"LOADING DATA..."})]}),(0,b.jsx)("style",{children:`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(0.95); }
          }
        `})]});let B=p.filter(a=>t.has(a.id)).reduce((a,b)=>a+b.total,0),C=r.filter(a=>v.has(a.id)).reduce((a,b)=>a+b.total,0);return(0,b.jsxs)("div",{style:{height:"100vh",background:"#ffffff",fontFamily:"'Inter', sans-serif",display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,b.jsxs)("div",{style:{padding:"16px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"2px solid #050505"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,b.jsx)("div",{style:{background:"#C4F000",border:"2px solid #050505",padding:"8px 10px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"#050505"},children:(0,b.jsx)(d.ArrowLeft,{size:18,strokeWidth:3})}),(0,b.jsxs)("div",{style:{fontFamily:"'Syne', sans-serif",fontSize:"16px",fontWeight:800,letterSpacing:"1.5px",color:"#050505",display:"flex",alignItems:"center",gap:"8px"},children:[(0,b.jsx)(e.Sparkles,{size:18,strokeWidth:3}),"AI TAX ASSISTANT"]})]}),(0,b.jsxs)("button",{onClick:y,disabled:j||0===t.size,style:{background:j?"#f5f5f5":"#C4F000",border:"2px solid #050505",padding:"8px 16px",fontSize:"11px",fontWeight:700,color:"#050505",cursor:j||0===t.size?"not-allowed":"pointer",letterSpacing:"0.5px",display:"flex",alignItems:"center",gap:"8px",opacity:j||0===t.size?.6:1},children:[(0,b.jsx)(i,{size:14,strokeWidth:3}),j?"GENERATING...":"GENERATE PDF REPORT"]})]}),(0,b.jsxs)("div",{style:{flex:1,padding:"20px",display:"flex",flexDirection:"column",gap:"20px",overflow:"auto"},children:[j&&(0,b.jsxs)("div",{style:{background:"#ffffff",border:"2px solid #050505",padding:"24px",display:"flex",flexDirection:"column",gap:"16px"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,b.jsxs)("div",{style:{fontSize:"14px",fontWeight:800,color:"#050505",letterSpacing:"1px",display:"flex",alignItems:"center",gap:"10px"},children:[(0,b.jsx)(g,{size:20,strokeWidth:3,style:{color:"#C4F000"}}),n]}),(0,b.jsxs)("div",{style:{fontSize:"18px",fontWeight:800,color:"#C4F000"},children:[l,"%"]})]}),(0,b.jsx)("div",{style:{height:"8px",background:"#f5f5f5",border:"2px solid #050505",overflow:"hidden"},children:(0,b.jsx)("div",{style:{height:"100%",background:"#C4F000",width:`${l}%`,transition:"width 0.3s ease"}})})]}),(0,b.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,b.jsxs)("div",{style:{flex:1,background:"#C4F000",border:"2px solid #050505",padding:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,b.jsx)("div",{style:{fontSize:"11px",fontWeight:700,color:"#050505",marginBottom:"8px",letterSpacing:"0.5px"},children:"TOTAL INCOME"}),(0,b.jsx)("div",{style:{fontSize:"32px",fontWeight:800,color:"#050505"},children:A(B)})]}),(0,b.jsxs)("div",{style:{flex:1,background:"#ffffff",border:"2px solid #050505",padding:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,b.jsx)("div",{style:{fontSize:"11px",fontWeight:700,color:"#050505",marginBottom:"8px",letterSpacing:"0.5px"},children:"DEDUCTIONS"}),(0,b.jsx)("div",{style:{fontSize:"32px",fontWeight:800,color:"#050505"},children:A(C)})]}),(0,b.jsxs)("div",{style:{flex:1,background:"#C4F000",border:"2px solid #050505",padding:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,b.jsx)("div",{style:{fontSize:"11px",fontWeight:700,color:"#050505",marginBottom:"8px",letterSpacing:"0.5px"},children:"TAXABLE INCOME"}),(0,b.jsx)("div",{style:{fontSize:"32px",fontWeight:800,color:"#050505"},children:A(B-C)})]})]}),(0,b.jsxs)("div",{style:{display:"flex",gap:"20px"},children:[(0,b.jsxs)("div",{style:{flex:1,background:"#ffffff",border:"2px solid #050505",padding:"20px",display:"flex",flexDirection:"column"},children:[(0,b.jsxs)("div",{style:{fontSize:"14px",fontWeight:800,color:"#050505",letterSpacing:"1px",marginBottom:"16px",paddingBottom:"12px",borderBottom:"2px solid #f5f5f5"},children:["INCOME SOURCES (",t.size,"/",p.length,")"]}),(0,b.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:p.map(a=>{let c=t.has(a.id);return(0,b.jsxs)("div",{onClick:()=>{var b;let c;return b=a.id,void((c=new Set(t)).has(b)?c.delete(b):c.add(b),u(c))},style:{background:c?"#f0fdf4":"#fafafa",border:c?"2px solid #C4F000":"2px solid #e5e5e5",padding:"14px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",transition:"all 0.2s"},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,b.jsx)("div",{style:{width:"20px",height:"20px",border:"2px solid #050505",background:c?"#C4F000":"#ffffff",display:"flex",alignItems:"center",justifyContent:"center"},children:c&&(0,b.jsx)(h.Calculator,{size:12,strokeWidth:3})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{style:{fontSize:"13px",fontWeight:700,color:"#050505"},children:a.label}),(0,b.jsxs)("div",{style:{fontSize:"10px",fontWeight:600,color:"#050505",opacity:.6},children:[a.months," month",a.months>1?"s":""]})]})]}),(0,b.jsx)("div",{style:{fontSize:"15px",fontWeight:800,color:"#050505"},children:A(a.total)})]},a.id)})})]}),(0,b.jsxs)("div",{style:{flex:1,background:"#ffffff",border:"2px solid #050505",padding:"20px",display:"flex",flexDirection:"column"},children:[(0,b.jsxs)("div",{style:{fontSize:"14px",fontWeight:800,color:"#050505",letterSpacing:"1px",marginBottom:"16px",paddingBottom:"12px",borderBottom:"2px solid #f5f5f5"},children:["TAX DEDUCTIONS (",v.size,"/",r.length,")"]}),(0,b.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:r.map(a=>{let c=v.has(a.id);return(0,b.jsxs)("div",{onClick:()=>{var b;let c;return b=a.id,void((c=new Set(v)).has(b)?c.delete(b):c.add(b),w(c))},style:{background:c?"#f0fdf4":"#fafafa",border:c?"2px solid #C4F000":"2px solid #e5e5e5",padding:"14px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",transition:"all 0.2s",opacity:a.deductible?1:.5},children:[(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,b.jsx)("div",{style:{width:"20px",height:"20px",border:"2px solid #050505",background:c?"#C4F000":"#ffffff",display:"flex",alignItems:"center",justifyContent:"center"},children:c&&(0,b.jsx)(h.Calculator,{size:12,strokeWidth:3})}),(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{style:{fontSize:"13px",fontWeight:700,color:"#050505",display:"flex",alignItems:"center",gap:"6px"},children:[a.label,!a.deductible&&(0,b.jsx)("span",{style:{fontSize:"8px",padding:"2px 6px",background:"#f5f5f5",border:"1px solid #e5e5e5",fontWeight:800},children:"NON-DEDUCTIBLE"})]}),(0,b.jsxs)("div",{style:{fontSize:"10px",fontWeight:600,color:"#050505",opacity:.6},children:[a.months," month",a.months>1?"s":""]})]})]}),(0,b.jsx)("div",{style:{fontSize:"15px",fontWeight:800,color:"#050505"},children:A(a.total)})]},a.id)})})]})]})]})]})}a.s(["default",()=>j],11860)}];

//# sourceMappingURL=app_tax_page_tsx_44c6a4eb._.js.map