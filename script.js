let currentPageIndex = 0; // Starting index of the page
const pages = document.querySelectorAll('.page'); // Get all pages
const totalPages = pages.length; // Total number of pages

// Initially hide all pages except the first one
pages.forEach((page, index) => {
    if (index !== 0) page.style.display = 'none';
});

// Show a specific page based on index
function goToPage(index) {
    pages[currentPageIndex].style.display = 'none'; // Hide current page
    pages[index].style.display = 'block'; // Show the new page
    currentPageIndex = index; // Update the current page index
}

// Event listener for "Next" button
document.getElementById('next').addEventListener('click', function() {
    if (currentPageIndex < totalPages - 1) {
        goToPage(currentPageIndex + 1);
    } else {
        alert("You're at the last page!");
    }
});

// Event listener for "Previous" button
document.getElementById('prev').addEventListener('click', function() {
    if (currentPageIndex > 0) {
        goToPage(currentPageIndex - 1);
    } else {
        alert("You're at the first page!");
    }
});
