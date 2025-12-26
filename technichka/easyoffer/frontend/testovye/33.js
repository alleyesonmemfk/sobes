График компетенций
Необходимо реализовать график, отображающий взаимосвязь между компетенциями и связанными навыками. На внешнем кольце отображаются навыки, на внутреннем - компетенции. При нажатии на компетенцию, отображаются линии, соединяющие её со связанными навыками. Линии основных навыков (mainSkills) - оранжевые, дополнительных (otherSkills) - фиолетовые.

Дизайн
https://www.figma.com/file/b6Vi2BgPs9VpaRp0NJ1RUw/chart-task-design?type=design&node-id=0%3A1&mode=design&t=YcwyItVfKIIvmPaN-1

Дополнительно
реализовать возможность выбора навыка, и отображения всех связанных с ним компетенций.
при выборе компетенции, соответствующие навыки должны располагаться как можно ближе, чтобы исключить длинных пересекающихся между собой линий
реализовать анимацию плавной отрисовки соединительных линий
Демо
https://private-user-images.githubusercontent.com/2546209/291071345-8e3f49b3-7de1-4a1b-8d30-aba6809996c4.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTQwNjc5ODgsIm5iZiI6MTcxNDA2NzY4OCwicGF0aCI6Ii8yNTQ2MjA5LzI5MTA3MTM0NS04ZTNmNDliMy03ZGUxLTRhMWItOGQzMC1hYmE2ODA5OTk2YzQuZ2lmP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI0MDQyNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNDA0MjVUMTc1NDQ4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9M2QwNzU1YzA0MGM0MzY2Yzc3OTBmMGFjYjcxYmQwYTQ5NzliZjY2MzkyNjkyODA2ZDUyNWM1M2U0YmM3ZTVhZSZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.hXwyGrnydaD7cjYwWRKd8K9oJOnPVBlyly2HhAxlbCk

Данные
[
{
name: "Финансовый аналитик",
mainSkills: ["Excel", "SQL", "VBA", "1С"],
otherSkills: ["Power BI", "Python"],
},
{
name: "Предприниматель",
mainSkills: ["1C", "Excel", "Power BI"],
otherSkills: [
"Google Analytics",
"Яндекс.Метрика",
"Python",
"SQL",
"Tilda",
],
},
{
name: "Продуктовый дизайнер",
mainSkills: [
"Figma",
"Sketch",
"Illustrator",
"Photoshop",
"Principle",
"Tilda",
],
otherSkills: ["Shopify", "Protopie", "Cinema 4D"],
},
{
name: "Менеджер проекта",
mainSkills: [
"Visio",
"1C",
"Google Analytics",
"Яндекс.Метрика",
"Python",
"SQL",
"Tilda",
],
otherSkills: ["Figma", "Sketch", "Shopify"],
},
{
name: "Финансовый менеджер",
mainSkills: ["1C", "Excel", "Power BI"],
otherSkills: ["BPMN"],
},
{
name: "Руководитель финансового департамента компании",
mainSkills: ["Sketch", "Figma"],
otherSkills: ["Shopify", "HQL"],
},

{
name: "Продуктовый аналитик",
mainSkills: [
"Google Analytics",
"Яндекс.Метрика",
"SQL",
"Power BI",
"Python",
"Excel",
],
otherSkills: ["HQL", "Tableau", "R", "Machine learning"],
},

{
name: "Руководитель финансового продукта",
mainSkills: ["Visio"],
otherSkills: ["Python"],
},
{
name: "Менеджер по маркетингу",
mainSkills: [
"Google Analytics",
"Яндекс.Метрика",
"Google Ads",
"Ahrefs",
"Главред",
"My Target",
],
otherSkills: ["Tilda", "Photoshop", "Xenu", "Python"],
},

{
name: "Менеджер по цифровой трансформации",
mainSkills: [
"Visio",
"Google Analytics",
"Яндекс.Метрика",
"Python",
"SQL",
"Tilda",
],
otherSkills: ["Figma", "Sketch", "Shopify"],
},
]