def calculate_days(target_credits, current_credits, is_premium):
    target = target_credits - current_credits

    daily_credits = 11
    bonus_credits = 30
    bonus_cycle = 30
    weekly_premium_credits = 35
    
    current_credits = 0
    days = 0
    
    while current_credits < target:
        days += 1
        current_credits += daily_credits
        
        if days % bonus_cycle == 0:
            current_credits += bonus_credits
        if is_premium and days % 7 == 0:
            current_credits += weekly_premium_credits
    
    return days

current = int(input("Enter the current amount of credits: "))
target = int(input("Enter the target amount of credits: "))
is_premium = input("Are you a premium user? (y/n): ").lower()
days_needed = calculate_days(target, current, is_premium == "y")
print(f"You need {days_needed} days to reach {target} credits.")