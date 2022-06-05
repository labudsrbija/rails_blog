import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {}

  toggleForm(event) {
      console.log("edit clicked");
      event.preventDefault();
      event.stopPropagation();
      const formID = event.params["form"];
      const commentBodyID = event.params["body"];
      //uzimam id elementa i toglujem klasu
      const form = document.getElementById(formID);
      form.classList.toggle("d-none");
      form.classList.toggle("mt-5");
      //uzimam id komentara
      const commentBody = document.getElementById(commentBodyID);
      commentBody.classList.toggle("d-none");
  }
}
