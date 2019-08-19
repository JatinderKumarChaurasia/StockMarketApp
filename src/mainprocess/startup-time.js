let markers = [];
let startTime;

module.exports = {
    setStartUpTime = () => {
        if (!startTime) {
            startTime = Date.now();
        }
    },
    addMarker = (label, datetime) => {
        if (!startTime) {
            return;
        }
        datetime = datetime || Date.now();
        markers.push({ label: label, time: datetime - startTime });
    },
    importData =(data) => {
        startTime = data.startTime;
        markers = data.markers;
    },
    exportData = () => {
        if (!startTime) {
            return undefined;
        }
        return { startTime, markers };
    },

    deleteData = () => {
        markers = [];
        startTime = undefined;
    }
}