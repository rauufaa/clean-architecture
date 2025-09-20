

export default function reservationsRatingRepository(repository) {
    const findAllByReservationIdPaginated = ( reservationId,sort, skip, limit) => repository.findAllByReservationIdPaginated( reservationId,sort, skip, limit);
    const findAllByReservationId = ( reservationId, sort) => repository.findAllByReservationId(reservationId, sort);
    const findAvgRatingsByReservationId = (reservationId) => repository.findAvgRatingsByReservationId(reservationId);
    const findAllPaginated = (sort, skip, limit) => repository.findAllPaginated(sort, skip, limit);
    const findByReservationId = (reservationId, sort) => repository.findByReservationId(reservationId, sort);
    const findAll = (sort) => repository.findAll(sort);
    const add = (rating) => repository.add(rating);


    return {
        findByReservationId,
        findAllByReservationIdPaginated,
        findAvgRatingsByReservationId,
        findAllByReservationId,
        findAllPaginated,
        findAll,
        add,
    }
}