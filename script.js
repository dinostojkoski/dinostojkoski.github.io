function toggleExerciseList(header) {
    const exerciseList = header.nextElementSibling;

    // Toggle the display property
    exerciseList.style.display = exerciseList.style.display === 'block' ? 'none' : 'block';
}