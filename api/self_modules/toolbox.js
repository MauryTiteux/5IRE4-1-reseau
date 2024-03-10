exports.checkMail = (mail) => {
    var re = /.+\@.+\..+/;
    return re.test(mail);
};

