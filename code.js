let currentPanelIndex = 0;
const panels = document.querySelectorAll('.sliding-panels .panel');

function changePanel(direction) {
    panels[currentPanelIndex].classList.remove('active');
    currentPanelIndex += direction;
    if (currentPanelIndex < 0) {
        currentPanelIndex = panels.length - 1;
    } else if (currentPanelIndex >= panels.length) {
        currentPanelIndex = 0;
    }
    panels[currentPanelIndex].classList.add('active');
}
