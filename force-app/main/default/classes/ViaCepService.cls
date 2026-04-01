public with sharing class ViaCepService {

    public static ViaCepEndereco buscarEnderecoPorCep(String cep) {

        if (String.isBlank(cep) || cep.length() != 8) {
            System.debug('CEP inválido. O CEP deve conter exatamente 8 caracteres.');            
        }
        else{

            String endpoint = 'https://viacep.com.br/ws/' + cep + '/json/';

            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint(endpoint);
            request.setMethod('GET');

            try {
                HttpResponse response = http.send(request);

                if (response.getStatusCode() == 200) {
                    String body = response.getBody();
                    ViaCepEndereco endereco = (ViaCepEndereco) JSON.deserialize(body, ViaCepEndereco.class);

                    if (endereco.logradouro == null && endereco.localidade == null) {
                        System.debug('CEP não encontrado.');
                        return null;
                    } else {
                        return endereco;
                    }
                }
            } catch (Exception e) {
                System.debug('Erro ao buscar o endereço: ' + e.getMessage());
            }
        }
        return null;
    }
}