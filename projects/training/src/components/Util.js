const componentsRegistry = []

const updateComponentsRegistry = () => {
    componentsRegistry.map((component) => component.changeState())
}

export {componentsRegistry, updateComponentsRegistry}