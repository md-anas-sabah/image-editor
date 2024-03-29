import ImageEditor from "@toast-ui/react-image-editor";
import "tui-image-editor/dist/tui-image-editor.css";

const theme = {
  "common.bi.image": "https://speedybrand.io/images/sidebar-logo.svg",
  "common.bisize.width": "40px",
  "common.bisize.height": "40px",
  "common.backgroundImage": "none",
  "common.backgroundColor": "#1e1e1e",
  "common.border": "0px",

  "header.backgroundImage": "none",
  "header.backgroundColor": "black",
  "header.border": "0px",

  "loadButton.backgroundColor": "#fff",
  "loadButton.border": "1px solid #ddd",
  "loadButton.color": "#222",
  "loadButton.fontFamily": "NotoSans, sans-serif",
  "loadButton.fontSize": "12px",

  "downloadButton.backgroundColor": "#FF8C00",
  "downloadButton.border": "1px solid #fdba3b",
  "downloadButton.color": "#fff",
  "downloadButton.fontFamily": "NotoSans, sans-serif",
  "downloadButton.fontSize": "12px",

  "menu.normalIcon.color": "#8a8a8a",
  "menu.activeIcon.color": "#555555",
  "menu.disabledIcon.color": "#434343",
  "menu.hoverIcon.color": "#e9e9e9",
  "submenu.normalIcon.color": "#8a8a8a",
  "submenu.activeIcon.color": "#e9e9e9",

  "menu.iconSize.width": "24px",
  "menu.iconSize.height": "24px",
  "submenu.iconSize.width": "32px",
  "submenu.iconSize.height": "32px",

  "submenu.backgroundColor": "#1e1e1e",
  "submenu.partition.color": "#858585",

  "submenu.normalLabel.color": "#858585",
  "submenu.normalLabel.fontWeight": "lighter",
  "submenu.activeLabel.color": "#fff",
  "submenu.activeLabel.fontWeight": "lighter",

  "checkbox.border": "1px solid #ccc",
  "checkbox.backgroundColor": "#fff",

  "range.pointer.color": "#fff",
  "range.bar.color": "#666",
  "range.subbar.color": "#d1d1d1",

  "range.disabledPointer.color": "#414141",
  "range.disabledBar.color": "#282828",
  "range.disabledSubbar.color": "#414141",

  "range.value.color": "#fff",
  "range.value.fontWeight": "lighter",
  "range.value.fontSize": "11px",
  "range.value.border": "1px solid #353535",
  "range.value.backgroundColor": "#151515",
  "range.title.color": "#fff",
  "range.title.fontWeight": "lighter",

  "colorpicker.button.border": "1px solid #1e1e1e",
  "colorpicker.title.color": "#fff",
};

const CustomImageEditor = () => {
  return (
    <ImageEditor
      includeUI={{
        loadImage: {
          path: "img/sampleImage.jpg",
          name: "SampleImage",
        },
        theme,
        menu: [
          "shape",
          "filter",
          "text",
          "mask",
          "icon",
          "draw",
          "crop",
          "flip",
          "rotate",
        ],
        initMenu: "filter",
        uiSize: {
          width: "1000px",
          height: "700px",
        },
        menuBarPosition: "bottom",
      }}
      cssMaxHeight={500}
      cssMaxWidth={700}
      selectionStyle={{
        cornerSize: 20,
        rotatingPointOffset: 70,
      }}
      usageStatistics={true}
    />
  );
};

export default CustomImageEditor;
