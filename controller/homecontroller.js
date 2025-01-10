
const homepage = (req, res) => {
    res.render('pages/index');
}

const about = (req, res) => {
    res.render("pages/about");
}
module.exports = {
    homepage,
    about
}




