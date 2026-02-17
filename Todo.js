    
    var ul = document.getElementById("listcontainer")
    var input = document.getElementById("input")

    function add()
    {
        var listitem = document.createElement("li")
        // listitem.textContent="Hello"
        // listitem.textContent=input.value + "<button>Delete</button>" // If we give as textcontent means it return like as text 
        listitem.innerHTML = input.value +" "+"<button onclick='del(event)' id='btn2'>Delete</button>"
        ul.append(listitem)
        input.value = ""
    }

    function del(event)
    {
       event.target.parentElement.remove()
    }



