"use client"
import * as React from 'react';
import { useState ,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Cart from "@/UI/cart/Cart";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function CustomizedAccordions({ services }) {
    const [expanded, setExpanded] = React.useState('panel1');
    const [itemsByCategory, setItemsByCategory] = useState({});
    

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    const uniqueCategories = [...new Set(services.data.map(item => 
        item.category))];

    useEffect(() => {
        const items = {};
        uniqueCategories.forEach(category => {
            const itemsInCategory = services.data.filter(item => item.category
                === category);
            items[category] = itemsInCategory;
        });
        setItemsByCategory(items);
        // console.log("accordion log")
    }, [services]);


    return (
        <div>
            {uniqueCategories?.map((ele, index) => (
                <Accordion key={index} expanded={expanded === `panel${index}`}
                    onChange={handleChange(`panel${index}`)}>
                    <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`} >
                        <Typography className='text-2xl'>{ele}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Cart 
                        service={ele}
                        itemsByCategory={itemsByCategory}
                        />
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
