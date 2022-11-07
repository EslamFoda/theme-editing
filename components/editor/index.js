import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { useDispatch } from "react-redux";
const EditorComp = ({
  initialValue,
  handleEdit,
  handleMultiEdit = false,
  id = undefined,
}) => {
  const editSections = useSelector((state) => state.editSections.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(initialValue ?? "");

  useEffect(() => setValue(initialValue ?? ""), [initialValue]);
  const editorRef = useRef(null);

  return (
    <>
      {editSections ? (
        <Editor
          value={value}
          apiKey="wofsz7vjfejaxoulvwsud2qp5pe1lqlyslyr4w7kqv5391u0"
          onBlur={() => {
            handleEdit
              ? dispatch(handleEdit(value))
              : dispatch(handleMultiEdit({ value: value, id: id }));
          }}
          onEditorChange={(newValue, editor) => {
            setValue(newValue);
          }}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={initialValue}
          init={{
            selector: ".tinymce-header",
            menubar: false,
            inline: true,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | removeformat | " +
              "bold italic underline Strikethrough FontSize  | alignleft aligncenter " +
              "alignright alignjustify | lineheight link forecolor backcolor | ",
          }}
        />
      ) : (
        <>{parse(initialValue)}</>
      )}
    </>
  );
};
export default EditorComp;
