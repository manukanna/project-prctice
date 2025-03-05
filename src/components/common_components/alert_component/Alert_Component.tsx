export const DangerAlert = ({ alertMessage }: any) => {
    return (
        <>
            <div className={`${alertMessage.alertColor} rounded-1 px-2 py-2 position-fixed alertMessage`}>
                {alertMessage.message}
            </div>
        </>
    )
}