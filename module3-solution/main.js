// I need JavaScript for the dropdown

const dropdown_btn = document.getElementById("dropdown-btn");
const dropdown_container = document.querySelector(".custom-dropdown-menu-container");

dropdown_btn.addEventListener("click", function()
{
    if (!dropdown_container.classList.contains("custom-dropdown-menu-container-visible"))
    {
        dropdown_container.classList.add("custom-dropdown-menu-container-visible");
        return;
    }

    dropdown_container.classList.remove("custom-dropdown-menu-container-visible");
});