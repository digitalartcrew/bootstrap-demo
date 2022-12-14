document.querySelector(".save-btn").addEventListener("click", (e) => {
  const imageUrl = document.querySelector("#imageUrl").value;
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;

  // debugger;

  const contentCard = `
            <div class="col-md-3">
            <div class="card p-2 mb-4">
                <img
                src=${imageUrl}
                class="card-img-top"
                alt="..."
                />
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">
                    ${description}
                </p>
                <a href="#" class="btn btn-primary">View Page</a>
                </div>
            </div>
            </div>
            `;

  const row = document.querySelector(".row");
  row.insertAdjacentHTML("beforeend", contentCard);
});

const createModal = new bootstrap.Modal(document.querySelector("#createModal"));
