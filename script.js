$(document).ready(function() {
    $.getJSON('terms.json', function(data) {
        let termSelect = $('#termSelect');
        let definitionContainer = $('#definitionContainer');

        // Adicionar opção padrão "Selecione" ao select
        termSelect.append(`<option value="" disabled selected>Selecione...</option>`);

        // Adicionar opções restantes ao select
        $.each(data, function(index, item) {
            termSelect.append(`<option value="${index}">${item.term}</option>`);
        });

        // Quando o usuário selecionar um termo
        termSelect.change(function() {
            let selectedIndex = $(this).val();
            if (selectedIndex !== "") {
                let selectedTerm = data[selectedIndex].term;
                let selectedDefinition = data[selectedIndex].definition;

                // Mostrar a definição do termo selecionado
                definitionContainer.html(`<h3>${selectedTerm}</h3><p>${selectedDefinition}</p>`);
            } else {
                // Selecione foi escolhido novamente, limpar a definição
                definitionContainer.empty();
            }
        });
    });
});
