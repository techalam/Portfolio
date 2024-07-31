document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
});

const redirectToUrl = (href) => {
    window.location.href = href;
}
document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './resume/Faizan_Alam_FED_2024.pdf'; // Replace with the path to your resume
    link.download = 'Faizan_Alam_FED_2024'; // Name of the downloaded file
    link.click();
});
