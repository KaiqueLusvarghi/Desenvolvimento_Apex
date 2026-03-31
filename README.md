# ☁️ Apex do Zero ao Profissional — Exercícios e Projetos

Repositório com todos os exercícios e projetos práticos desenvolvidos durante o curso **"Apex do Zero ao Profissional"** da [CodeCloud Academy](https://www.udemy.com/), disponível na Udemy.

---

## 📚 Sobre o Curso

O curso aborda do zero ao nível profissional o desenvolvimento na plataforma Salesforce com Apex, cobrindo desde fundamentos de programação orientada a objetos até integrações com APIs REST e desenvolvimento de componentes LWC.

---

## 🎯 O que foi aprendido

- ✅ Estrutura da plataforma Salesforce e o papel do Apex no ecossistema
- ✅ Consultas SOQL e operações DML para manipulação de dados
- ✅ Programação Orientada a Objetos (POO) aplicada ao Apex
- ✅ Triggers e Classes seguindo boas práticas e Clean Code
- ✅ Governor Limits — como respeitar os limites da plataforma
- ✅ Processos assíncronos: Batch Apex, Queueable, Scheduled Apex e Future Methods
- ✅ Integração com APIs REST externas
- ✅ Testes unitários com cobertura de código
- ✅ Lightning Web Components (LWC) integrados com Apex

---

## 🗂️ Estrutura do Repositório

```
📦 apex-do-zero-ao-profissional
 ┣ 📂 01-fundamentos
 ┣ 📂 02-poo
 ┣ 📂 03-soql-dml
 ┣ 📂 04-triggers
 ┣ 📂 05-clean-code
 ┣ 📂 06-governor-limits
 ┣ 📂 07-apex-async
 ┃   ┣ 📂 batch
 ┃   ┣ 📂 queueable
 ┃   ┣ 📂 scheduled
 ┃   ┗ 📂 future
 ┣ 📂 08-api-rest
 ┣ 📂 09-apex-test
 ┗ 📂 10-lwc
```

> ⚠️ A estrutura de pastas pode variar conforme o andamento do curso.

---

## 🛠️ Tecnologias Utilizadas

![Salesforce](https://img.shields.io/badge/Salesforce-00A1E0?style=for-the-badge&logo=salesforce&logoColor=white)
![Apex](https://img.shields.io/badge/Apex-1798c1?style=for-the-badge&logo=salesforce&logoColor=white)
![LWC](https://img.shields.io/badge/LWC-032D60?style=for-the-badge&logo=salesforce&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)

- **Salesforce CLI (SF CLI)**
- **VS Code** com extensão Salesforce Extension Pack
- **Apex** — linguagem principal
- **SOQL / DML** — consultas e manipulação de dados
- **LWC** — Lightning Web Components

---

## ▶️ Como usar este repositório

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Abra no VS Code com a extensão **Salesforce Extension Pack** instalada.

3. Autentique sua org:
```bash
sf org login web --alias minha-org
```

4. Faça o deploy de uma classe específica:
```bash
sf project deploy start --source-dir force-app/main/default/classes/NomeDaClasse.cls --target-org minha-org
```

---

## 📖 Conteúdo por Módulo

| Módulo | Tópico | Status |
|--------|--------|--------|
| 01 | Fundamentos do Apex | ✅ |
| 02 | POO — Programação Orientada a Objetos | ✅ |
| 03 | SOQL e DML | ✅ |
| 04 | Triggers | ✅ |
| 05 | Clean Code | ✅ |
| 06 | Governor Limits | ✅ |
| 07 | Apex Async (Batch, Queueable, Scheduled, Future) | ✅ |
| 08 | API REST | ✅ |
| 09 | Apex Test | ✅ |
| 10 | LWC — Lightning Web Components | ✅ |

---

## 📌 Referências

- [Documentação Oficial Salesforce Apex](https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/)
- [Trailhead — Salesforce Learning](https://trailhead.salesforce.com/)
- [Curso na Udemy — CodeCloud Academy](https://www.udemy.com/)

---

## 👨‍💻 Autor

Feito com 💙 durante a jornada de aprendizado na plataforma Salesforce.

Se este repositório foi útil para você, deixe uma ⭐!
