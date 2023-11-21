// import required packages
import "zone.js";
import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { MatTreeModule } from "@angular/material/tree";

// describe component
@Component({
  selector: "tree",
  standalone: true,
  templateUrl: "./tree.html",
  imports: [MatTreeModule],
})

// export component
export class TreeComponent {
  count = 0;
}

bootstrapApplication(TreeComponent);
