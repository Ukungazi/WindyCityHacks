document.addEventListener('DOMContentLoaded', function() {
    let selectedTerm = null;
    const definitions = document.querySelectorAll('.definitions .match-item');
    const terms = document.querySelectorAll('.terms .match-item');
    const result = document.getElementById('result');

    function handleDefinitionClick(def) {
        if (selectedTerm) {
            if (selectedTerm.dataset.term === def.dataset.term) {
                def.style.backgroundColor = 'lightgreen';
                selectedTerm.style.backgroundColor = 'lightgreen';
                selectedTerm = null;
                checkCompletion();
            } else {
                def.style.backgroundColor = 'red';
                setTimeout(() => {
                    def.style.backgroundColor = '';
                }, 1000);
            }
        }
    }

    function handleTermClick(term) {
        if (selectedTerm) {
            selectedTerm.style.backgroundColor = '';
        }
        selectedTerm = term;
        term.style.backgroundColor = 'yellow';
    }

    function checkCompletion() {
        const allMatched = Array.from(definitions).every(def => def.style.backgroundColor === 'lightgreen');
        if (allMatched) {
            result.textContent = 'Congratulations! You matched all terms correctly.';
            result.classList.remove('hidden');
        }
    }

    definitions.forEach(def => {
        def.addEventListener('click', () => handleDefinitionClick(def));
    });

    terms.forEach(term => {
        term.addEventListener('click', () => handleTermClick(term));
    });
});