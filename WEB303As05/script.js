/*
    Author's Name: Uwaguosa Aluyi-Osa
    Assignment5
    Student ID: 0817788
    Date: 01-03-2023
*/

$("document").ready(function () {

    
    class ContentItem {
        
        
        constructor(id, fName, description, categoryGenre) {
            this.id = id;
            this.fName = fName;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }

        updateContentItem(id, fName, description, categoryGenre) 
        {

            if (this.id === id) {
                if (fName) {
                    this.fName = fName;
                }
                if (description) {
                    this.description = description;
                }
                if (categoryGenre) {
                    this.categoryGenre = categoryGenre;
                }
            }
        }

        toString()
        {
            let content = `<div class="content-item-wrapper" id="content-item-id${this.id}">`;
            content += `<h2>${this.fName}</h2>`;
            content += `<p>${this.description}</p>`;
            content += `<div>${this.categoryGenre}</div>`;
            content += `</div>`;
            return content;
        }
    }

    let array = [
        new ContentItem(0, 'The Dark Knight', 'A 2008 superhero film directed by Christopher Nolan, based on the DC Comics character Batman.', 'Action'),
        new ContentItem(1, 'Wonder Woman', 'A 2017 superhero film based on the DC Comics character of the same name.', 'Action'),
        new ContentItem(2, 'Aquaman', 'A 2018 superhero film based on the DC Comics character of the same name.', 'Action'),
        new ContentItem(3, 'Man of Steel', 'A 2013 superhero film based on the DC Comics character Superman.', 'Action'),
        new ContentItem(4, 'Shazam!', 'A 2019 superhero film based on the DC Comics character of the same name.', 'Action')
    ];

    for (let i = 0; i < array.length; i++)
     {
        const itemContent = array[i];
        const itemHtml = itemContent.toString();
        $("#content-item-list").append(itemHtml);
    }

    $('.content-item-wrapper').css({
        'border': '1px solid #ccc',
        'width': '80%',
        'padding': '20px',
        'margin': '50px auto'
      });  


      // Button to update an existing ContentItem successfully
    $('#update-successful').on('click', function () {
        const itemUpdate = array[0];
        itemUpdate.updateContentItem('The Dark Knight Rises', 'A 2012 superhero film directed by Christopher Nolan, based on the DC Comics character Batman.', 'Action');
        const updated = itemUpdate.toString();
        $('#content-item-id0').replaceWith(updated);
    });

    // Button to update an existing ContentItem unsuccessfully
    $('#update-unsuccessful').on('click', function ()
     {
        const itemUpdate = array[1];
        itemUpdate.updateContentItem(null, null, null); // Passing null to all arguments to trigger the error
        const updated = itemUpdate.toString();
        $('#content-item-id1').replaceWith(updated);
    });

    // Button styling
    $('button').css({
        'background-color': '#007bff',
        'color': '#fff',
        'border': 'none',
        'border-radius': '5px',
        'padding': '10px',
        'margin': '10px',
        'cursor': 'pointer'
    });

      
});



