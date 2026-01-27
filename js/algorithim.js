function hideHeader()
{
    console.log("ran function");
    const mainHeader = document.getElementById("mainHeader");
    const mainContent = document.querySelector('.mainContent');
    let   headerStyle = window.getComputedStyle(mainHeader);

    if(headerStyle.display === 'none')
    {
        mainHeader.style.display = "flex";
        mainContent.style.height = 'calc(100vh - 205px)'
    }
    else if(headerStyle.display === 'flex')
    {
        mainHeader.style.display = 'none';
        mainContent.style.height = '100vh';     
    }

}