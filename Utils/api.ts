export async function getData() {
    const res = await fetch('https://pressure-data-98365-default-rtdb.firebaseio.com/test.json?auth=AIzaSyA7a3jJYk6SZx2XHew43MrGojCaBKRtA0Y');
    return res.json();
  }
  