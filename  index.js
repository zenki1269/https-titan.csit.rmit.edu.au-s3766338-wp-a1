window.addEventListener('DOMContentLoaded',()=>{
    let header = document.querySelector('header')
    console.log(header)
    window.addEventListener("scroll",()=>{
        if(window.scrollY) {
            header.style.background = "#ffffff"
            header.style.borderBottom = "solid 1px black"
        }
        else{
            header.style.background = "transparent"
            header.style.borderBottom = "none"
        }
    })
    let submitbuton = document.querySelector("#submitbtn")
    submitbuton.disabled = true
    submitbuton.style.opacity = '0.5'
    let pid = document.querySelector('#pid')
    let date = document.querySelector("#date")
    date.min = new  Date().toISOString().split("T")[0];
    let pillgroup = document.querySelectorAll('.pillgroup__element')
    let checkbox = document.querySelectorAll('.checkbox')
    let select = document.querySelector('#reason')
    let advice = document.querySelectorAll('.advice')
    pid.addEventListener('change',()=>{
        let hastime = false
        pid.value = pid.value.toString().toUpperCase()
        let total = 0
        for(let i=0;i<pid.value.length;i++)
        {  
            total += !isNaN(pid.value[i])? Number(pid.value[i]) : 0
        }
        console.log(pid.value.charCodeAt(pid.value.length -1))

        checkbox.forEach(item => {if(item.checked){hastime = true}})
        if(pid.value && date.value && hastime && select != '0' && ((total%26)+ 64) == pid.value.charCodeAt(pid.value.length -1) )
        {
            submitbuton.disabled = false;
            submitbuton.style.opacity = '1'
        }
    })
    select.addEventListener('change',()=>{
        advice.forEach(item => {
            item.style.display = 'none'
        })
        if(select.value != '0') {
        advice[Number(select.value)-1].style.display = 'flex'
        }
        let hastime = false
        let total = 0
        for(let i=0;i<pid.value;i++)
        {
            total += !isNaN(pid.value[i])? Number(pid.value[i]) : 0
        }

        checkbox.forEach(item => {if(item.checked){hastime = true}})
        if(pid.value && date.value && hastime && select != '0' && ((total%26)+ 64) == pid.value.charCodeAt(pid.value.length -1) )
        {
            submitbuton.disabled = false;
            submitbuton.style.opacity = '1'
        }
    })
    date.addEventListener('change', ()=>{
        console.log(date.value)
        let hastime = false
        let total = 0
        for(let i=0;i<pid.value.length;i++)
        {   
            console.log(pid.value[i])
            total += !isNaN(pid.value[i])? Number(pid.value[i]) : 0
        }

        checkbox.forEach(item => {if(item.checked){hastime = true}})
        if(pid.value != '' && date.value != '' && hastime && select != '0' && ((total%26)+ 64) == pid.value.charCodeAt(pid.value.length -1) )
        {
            submitbuton.disabled = false;
            submitbuton.style.opacity = '1'
        }
    })
    for(let i=0;i<pillgroup.length;i++)
    { 
        pillgroup[i].addEventListener('click',()=>{
            checkbox.forEach(item => {
                item.checked = false
            })
            checkbox[i].checked = !checkbox[i].checked;
            checkbox.forEach((item,index) => {
                if(item.checked)
                {
                    pillgroup[index].classList.add('active')
                }
                else {
                    pillgroup[index].classList.remove('active')
                }
            })
            let hastime = false
            let total = 0
        for(let i=0;i<pid.value.length;i++)
        {
            total += !isNaN(pid.value[i])? Number(pid.value[i]) : 0
        }

        checkbox.forEach(item => {if(item.checked){hastime = true}})
        if(pid.value && date.value && hastime && select != '0' && ((total%26)+ 64) == pid.value.charCodeAt(pid.value.length -1) )
        {
            submitbuton.disabled = false;
            submitbuton.style.opacity = '1'
        }
        })
    }

})