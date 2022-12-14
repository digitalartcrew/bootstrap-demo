const createModal = new bootstrap.Modal(document.querySelector("#createModal"));

const buildContentCard = ({ imageUrl, title, description }) => {
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

  return contentCard;
};

const appendItemsToRow = (arrofItems) => {
  const row = document.querySelector(".row");
  row.innerHTML = "";

  arrofItems.forEach((item) => {
    const newContentCard = buildContentCard(item);
    row.insertAdjacentHTML("beforeend", newContentCard);
  });
};

document.querySelector(".save-btn").addEventListener("click", (e) => {
  const imageUrl = document.querySelector("#imageUrl").value;
  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;

  const currentItems = JSON.parse(localStorage.getItem("items")) || [];

  const newItem = { title, imageUrl, description };
  const newItems = [...currentItems, newItem];

  localStorage.setItem("items", JSON.stringify(newItems));

  appendItemsToRow(newItems);

  createModal.hide();
});
