import { Workspace } from "./Workspace";
import { Block } from "./Block";
import { Page } from "./Page";
import { List } from "./List";
import { DocumentClass } from "./Document";

let workspaceBlock = new Workspace<Block>();
let pageBlock = new Block();
pageBlock.add();
workspaceBlock.blocks.push(pageBlock);

let workspacePage = new Workspace<Page>();
let pageItem = new Page();
pageItem.add();
workspacePage.blocks.push(pageItem);

let workspaceList = new Workspace<List>();
let listItem = new List();
listItem.add();
workspaceList.blocks.push(listItem);

let workspaceDocument = new Workspace<DocumentClass>();
let listDocument = new DocumentClass();
listItem.add();
workspaceDocument.blocks.push(listDocument);

if (document && document.getElementById("app")) {
  document.getElementById("app").innerHTML = `
  <h1>Hello Parcel!</h1>
  <div>
    Look
    <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
    for more info about Parcel.
  </div>
  `;
}
