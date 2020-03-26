people = [
  "Lizzy",
  "James",
  "Gio",
  "Joe",
  "Kat",
  "Vatsal",
  "Hettie",
  "Roger",
  "Ivo",
  "Hannah",
  "Jack",
  "Chloe",
  "Tom",
  "Ako",
  "Ina",
  "Campbell"
]

def find_permutations_of_pairs(people)
  possibilities = people.permutation(2).map { |e| e.sort }
  daily_pairings = {}
  (1..people.length).each do |n|
    result = find_daily_pairs(possibilities) 
    daily_pairings[n] = result['pairs']
    possibilities = result['possibilities']
  end
  return daily_pairings
end

def find_daily_pairs(possibilities)
  picked = []
  pairs = []

  until picked.length == 16
    pair_position = possibilities.find_index do |pair|
      pair.none? { |person| picked.include?(person) }
    end
    pairs.push(possibilities[pair_position])
    picked += possibilities[pair_position]
    possibilities.delete_at(pair_position)
  end
  return { 'possibilities' => possibilities, 'pairs' => pairs}
end

find_permutations_of_pairs(people).each {|key, value| puts "#{key} is #{value}" }