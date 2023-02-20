$(document).ready(function () { 
    let count = 0
    load()
    $(document).on('click', '.next-button', function (e) { 
        count++
        load()
    })
    function load() {
        
        if (count > (data.length-1)) {
            alert("No More People !")
            return true;
        }
        let item = '<div class="item"><div class="count">'+(count+1)+'</div><div class="content"><div class="data-name data"><span class="name label">Name: </span>'+data[count].name+'</div><div class="data-location data"><span class="location label">Location: </span>'+data[count].name+'</div></div></div>'
        $("#people-data").append(item)
        $(".people-count").html(count+1)
    }
})