
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add Söhne font
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @font-face {
    font-family: 'Söhne';
    src: url('https://cdn.fontshare.com/wf/ZBZOW5QTSB57FDKBUFUZSVLM7ZZGGE/XPYKO3OBRPTZ7OBMN35PVVU5TU6QAG/FSACFJ7OZUHNBCUZP6X3F5QOVLPRQT.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Söhne';
    src: url('https://cdn.fontshare.com/wf/Z4MSJPE64U4OI23QEQOLRFNQC5SGVS/CSYVYSK2IUWFHFP2SNAUMRUX5S7JXK/ALNQVUNHJGKJBZ57KCZ5GQX3HR4YGU.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Söhne';
    src: url('https://cdn.fontshare.com/wf/JC2MXD6YLZ424LNCPWCESRCU2QFUIO/NYJNSHOKTJLHECNBHCUETLMTXZ3PQF/ICELHHQZEBNBFQCPYJWCPA5SDSY5PX.woff2') format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Söhne';
    src: url('https://cdn.fontshare.com/wf/JCNH5EMRVW7RSLCUI2QFYQ57MDIQZB/APGRIAKSV2DBVFZEUZTJRFPQUXP7CI/N33OCFJGKQI4TBSOJOFUBQVJ5YRKLQ.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;
document.head.appendChild(styleSheet);

createRoot(document.getElementById("root")!).render(<App />);
