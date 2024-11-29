export default function ChooseTagColor(tag) {
    switch (tag) {
        case "html":
            return "btn-success";
        case "css":
            return "btn-warning";
        case "js":
            return "btn-danger";
        case "php":
            return "btn-info";
        default:
            return "btn-light";
    }
}
