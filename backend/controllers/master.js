export const tables = (req, res) => {
    console.log("Line break");
    console.log(req.user);
    res.status(200).json({ message: "master controller working." });
}