/*
    Assignment 05
*/

$(document).ready(function () {
    //create a class contentItem
    class ContentItem {
        constructor(id, name, description, category) {
          this.id = id;
          this.name = name;
          this.description = description;
          this.category = category;
        }
      //update content item based on id
        updateContentItem(id, name, description, category) {
          if (this.id === id) {
            if (name !== null) this.name = name;
            if (description !== null) this.description = description;
            if (category !== null) this.category = category;
          }
        }
      //html for content items
        toString() {
          return `
            <div class="content-item-wrapper" id="content-item-${this.id}">
              <h2>${this.name}</h2>
              <p>${this.description}</p>
              <div>${this.category}</div>
            </div>
          `;
        }
      }
      
      // Create an array of 5 content items
      const contentItems = [
        new ContentItem(0, "A4", "The Audi A4 is a line of luxury compact executive cars produced since 1994 by the German car manufacturer Audi", "Audi"),
        new ContentItem(1, "Mini-Cooper", "Performance Cars of the original Mini series with uprated drive train and brakes, called the Mini-Cooper, made by the British Motor Corporation and its successors 1961 to 1971, and 1990 to2000", "Mini"),
        new ContentItem(2, "AG", "Porsche AG, usually shortened to Porsche, is a German automobile manufacturer specializing in high-performance sports cars", "Porsche"),
        new ContentItem(3, "Jetta", "The Jetta has been offered in two- and four-door saloon / sedan, and five-door wagon / estate versions  all as four- or five-seaters. Since the original version in 1980", "Volkswagen"),
        new ContentItem(4, "Civic", "The Honda Civic  is a series of automobiles manufactured by Honda since 1972.", "Honda"),
      ];
      
      // Display content items on the web page
      $(document).ready(function () {
        const contentList = $('#content-item-list');
        contentItems.forEach((item) => {
          contentList.append(item.toString());
        });
      
        // Add styles to content items using jQuery
        $('.content-item-wrapper').css({
          border: '1px solid #000',
          width: '400px',
          padding: '10px',
          margin: '10px auto',
        });
      });
      

});


