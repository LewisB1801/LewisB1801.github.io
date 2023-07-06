let text = document.getElementById('Green').innerHTML;
  const getGreen = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

let text2 = document.getElementById('Black').innerHTML;
  const getBlack = async () => {
    try {
      await navigator.clipboard.writeText(text2);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

let text3 = document.getElementById('White').innerHTML;
  const getWhite = async () => {
    try {
      await navigator.clipboard.writeText(text3);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }