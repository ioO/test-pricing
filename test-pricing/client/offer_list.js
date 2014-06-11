var offersData = [
    {
        name: "Early Bird",
        price: 600
    },
    {
        name: "Normal",
        price: 1000
    }
];
Template.offerList.helpers({
    offers: offersData
});
