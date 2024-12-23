import React, { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const defaultUrl = "https://bit.ly/riderarun";
  const [colorDark, setColorDark] = useState("#000");
  const [colorLight, setColorLight] = useState("#fff");
  const [text, setText] = useState(defaultUrl);
  const [size, setSize] = useState(300);
  const qrRef = useRef();

  const handleDarkColor = (e) => {
    setColorDark(e.target.value);
  };

  const handleLightColor = (e) => {
    setColorLight(e.target.value);
  };

  const handleQRText = (e) => {
    const value = e.target.value;
    setText(value || defaultUrl);
  };

  const handleSize = (e) => {
    setSize(Number(e.target.value));
  };

  const resolveDataUrl = async () => {
    const canvas = qrRef.current.querySelector("canvas");
    return canvas.toDataURL();
  };

  const handleShare = async () => {
    try {
      const base64url = await resolveDataUrl();
      const blob = await (await fetch(base64url)).blob();
      const file = new File([blob], "QRCode.png", { type: blob.type });

      await navigator.share({
        files: [file],
        title: text,
      });
    } catch (error) {
      alert("Your browser doesn't support sharing.");
    }
  };

  const handleDownload = async () => {
    const base64url = await resolveDataUrl();
    const link = document.createElement("a");
    link.href = base64url;
    link.download = "QRCode.png";
    link.click();
  };

  return (
    <div className="qr-code-generator">
      <div>
        <label>Dark Color: </label>
        <input type="color" value={colorDark} onChange={handleDarkColor} />
      </div>
      <div>
        <label>Light Color: </label>
        <input type="color" value={colorLight} onChange={handleLightColor} />
      </div>
      <div>
        <label>QR Text: </label>
        <input
          type="text"
          value={text}
          onChange={handleQRText}
          placeholder="Enter text or URL"
        />
      </div>
      <div>
        <label>Size: </label>
        <select value={size} onChange={handleSize}>
          <option value={150}>150x150</option>
          <option value={300}>300x300</option>
          <option value={450}>450x450</option>
        </select>
      </div>
      <div ref={qrRef} id="qr-code">
        <QRCodeCanvas
          value={text}
          size={size}
          bgColor={colorLight}
          fgColor={colorDark}
        />
      </div>
      <div>
        <button onClick={handleDownload} className="download">
          Download QR Code
        </button>
        <button onClick={handleShare} className="share-btn">
          Share QR Code
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;