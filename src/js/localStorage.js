export const save = (key, value) => {
try {
    localStorage.setItem(key, JSON.stringify(value));
} catch (error) {
    console.error('Помилка збереження до Local Storage:', error);
}
};

export const load = (key) => {
try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
} catch (error) {
    console.error('Помилка завантаження з Local Storage:', error);
}
};
