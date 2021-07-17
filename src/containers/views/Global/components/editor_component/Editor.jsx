import React, { useState, useRef, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parseData from "react-html-parser";
import "./Editor.css";
const images_path = process.env.PUBLIC_URL + "/assets/images/";

const Editor = () => {
  const [myeditor, setMyeditor] = useState("");
  const [addData, setAddData] = useState("");
  useEffect(() => {}, []);

  const editorData = (e, editor) => {
    const data = editor.getData();
    setMyeditor(data);
  };
  return (
    <div className="row_full">
      <div className="container">
        <div className="row_full disp_flex">
          <div className="middleboxArea">
            <h3>
              Editor{" "}
              <a
                href="javascript:void(0);"
                onClick={() => {
                  setAddData(!addData);
                }}
              >
                {addData ? "Hide Data" : "Show Data"}
              </a>
            </h3>
            <div className="row_full inputAdd">
              <CKEditor
                editor={ClassicEditor}
                config={{ ckfinder: { uploadUrl: "../uploads" } }}
                data={myeditor}
                onChange={editorData}
              />
            </div>

            {addData ? (
              <div className="row_full" style={{ marginTop: "25px" }}>
                {parseData(myeditor)}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
