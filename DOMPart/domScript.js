
      //give red background for all ul tags


      const allUlTags = document.getElementsByTagName("ul");
      //LIST of Node Elements--> [NODE ELEMENT(ul), NODE ELEMENT(ul), NODE ELEMENT(ul)]
      for (let i = 0; i < allUlTags.length; i++) {
        allUlTags[i].style.backgroundColor = "pink";
        
      }

      //give text color blue for all list class node elements
      const allListClassEle = document.getElementsByClassName("list");

      //LIST of Node Elements--> [NODE ELEMENT(ul), NODE ELEMENT(ul), NODE ELEMENT(ol)];
      for (let i = 0; i < allListClassEle.length; i++) {
        allListClassEle[i].style.color = "blue";
        allListClassEle[i].style.borderLeft = "3px solid red";
      }

      const list3 = document.getElementById("list3");
      //NodeElement(ol)
      list3.style.fontSize = "20px";

      //prints the content in form of HTML
      console.log(list3.innerHTML);
      //only prints all text content irrespective of visibility
      console.log(list3.textContent);

      console.log(list3.children.length);

      list3.children[2].style.fontSize = "10px";

      //Item - A --> true
      //Item - z --> false
      //Item - 10 --> false

      function checkHTMLQuery(query) {
        const liTags = document.getElementsByTagName("li");
        for (let i = 0; i < liTags.length; i++) {
          if (liTags[i].textContent == query) {
            liTags[i].style.backgroundColor = "yellow";
            return true;
          }
        }
        return false;
      }

      console.log(checkHTMLQuery("Item - 5"));

      //const allTableHeads=document.getElementsByTagName("th");
      const allTableHeads = document.querySelectorAll("th");
      for (let i = 0; i < allTableHeads.length; i++) {
        allTableHeads[i].style.fontSize = "20px";
      }

      //querySelectorAll()--> getElementsByClassName, getElementsByTagName

      //querySelector--> Get first occurance

      //const highlighted=document.getElementById("highlighted");
      const highlighted = document.querySelector("highlighted");
      highlighted.style.color = "red";

      const firstRowClassEle = document.querySelector("li");
      firstRowClassEle.style.fontSize = "20px";
      firstRowClassEle.style.fontWeight = "bolder";
    