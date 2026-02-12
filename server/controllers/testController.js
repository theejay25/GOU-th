export const testController = (req, res) => {
    return res.status(200).json({message: 'Working', success: true})
}