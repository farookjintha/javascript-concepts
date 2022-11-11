function prefixUser(name) {
    const salutation = 'Mr.';
    function displayName(name) {
      console.log(`${salutation} ${name}`);
    }
    return displayName(name);
  }

prefixUser('John'); // returning a func