export const Lease = ({ name, description, total, user, cellar }) => { //PROPS -> parámetros que se envían al momento de llamar al componente (la función)
    return (
        <>
            <td>{name}</td>
            <td>{description}</td>
            <td>{total}</td>
            <td>{user}</td>
            <td>{cellar}</td>
        </>
    )
}