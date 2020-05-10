export default function toggleLesson(module, lesson, video) {
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson,
        video
    };
}