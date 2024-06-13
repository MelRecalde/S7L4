

// https://api.pexels.com/v1/search?query=peony&per_page=1

window.addEventListener("DOMContentLoaded", function () {

    fetch("https://api.pexels.com/v1/search?query=peony", {
        headers :
        { Authorization : "AACN3O68nc2eOqM5JhEX7K309SSJ90S7b7YyUTIlssRcXP0R83yHo2D9" }
    }
    )
    
    .then(responsive => {
        console.log(responsive)
        if(responsive.ok){
            return responsive.json()
        } else {
            throw new Error ("Error fetching")
        }
    })
    .then( data => {
        console.log(data)
        const uploadBtn = document.getElementById("upload")
            uploadBtn.addEventListener("click", () => {
                data.photos.forEach( pic => {
                    console.log(pic)
                const container = document.getElementById("card-container")
                const col = document.createElement("div")
                col.classList.add("col-md-4")
                col.innerHTML = `
              <div class="card mb-4 shadow-sm">
                <img
                  src="${pic.src.original}"
                  class="bd-placeholder-img card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">${pic.alt}</h5>
                  <p class="card-text">
                    by ${pic.photographer}
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small class="text-muted">ID : ${pic.id}</small>
                  </div>
                </div>
              </div>
            `
            container.appendChild(col)
            })
        })

    })
    .catch(error => {
        console.log(error)
    })
})