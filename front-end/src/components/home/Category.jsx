import { Button, Table, TableHead, TableBody, TableRow, TableCell, makeStyles } from '@material-ui/core';
import { categories } from '../../constants/data';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    write: {
        margin: 20,
        background: '#6495ED',
        color: '#fff',
        width: '85%',
        textDecoration: 'none'
    },
    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
});

const Category = () => {

    const classes = useStyles();
    return (
        <>
            <Link to='/create' className={classes.link}><Button variant="contained" className={classes.write}>Write Blog</Button></Link>
            <Table className={classes.table}>
                <TableHead>
                    <TableCell>
                        All Categories
                    </TableCell>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>
                                    {category}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )

}

export default Category;