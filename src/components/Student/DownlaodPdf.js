import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const ReactPdfprinter = () => {
  const componentRef = useRef();
  const prinntData = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "test",
    onafterprint: () => alert("print success"),
  });
  return (
    <div ref={componentRef}>
      <h1> etudiant </h1>
      <button onClick={prinntData}>pdf</button>
    </div>
  );
};
export default ReactPdfprinter;

// import React from "react";
// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";

// const DownloadPage = ({ rootElementId, downloadFileName }) => {
//   const downloadFileDocument = () => {
//     const input = document.getElementById(rootElementId);
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF("p", "pt", "a4");
//       pdf.addImage(imgData, "JPEG", 10, 50);
//       pdf.save(`${downloadFileName}`);
//     });
//   };
//   return (
//     <div>
//       <button onClick={downloadFileDocument}>pdf</button>
//     </div>
//   );
// };
// export default DownloadPage;
