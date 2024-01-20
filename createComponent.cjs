// Виклик --> node createComponent.cjs НазваКомпоненту


const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];
if (!componentName) {
  console.error('Будь ласка, вкажіть назву компонента');
  process.exit(1);
}

const componentDir = path.join(__dirname, 'src', 'components', componentName);
if (fs.existsSync(componentDir)) {
  console.error(`Компонент ${componentName} вже існує.`);
  process.exit(1);
}

fs.mkdirSync(componentDir, { recursive: true });

const jsxContent = 
`import css from './${componentName}.module.css';

const ${componentName} = () => {
  return (
    <div className="${componentName}">
      
    </div>
  );
};

export default ${componentName};
`;

fs.writeFileSync(path.join(componentDir, `${componentName}.jsx`), jsxContent);
fs.writeFileSync(path.join(componentDir, `${componentName}.module.css`), ``);

console.log(`Компонент ${componentName} було успішно створено!`);
