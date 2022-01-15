import { REPO } from "../config";

export async function fetchVideoById(id) {
  var res = await fetch(`https://api.github.com/repos/${REPO}/issues/${id}`);

  var data = await res.json();

  if (res.ok) {
    if (data.labels.findIndex(label => label.name === "video") !== -1) {
      return data;
    } else {
      return {error:"Not Found"};
    }
  } else {
    return {error:data.message};
  }
}
