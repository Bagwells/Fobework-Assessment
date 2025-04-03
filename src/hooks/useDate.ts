
const today = new Date();
export const formattedDate = today.toLocaleDateString('en-US', {
    day:'numeric',
    month: 'long',
    year:'numeric',
}) 